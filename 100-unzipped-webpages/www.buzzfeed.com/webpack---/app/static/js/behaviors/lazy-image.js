import {
    Application
} from 't3js';
import imageConverter from '../services/image-converter';
import dom from '@buzzfeed/buzzblocks/js/services/dom';
import util from '@buzzfeed/buzzblocks/js/services/util';
import {
    instrument
} from '@buzzfeed/buzzblocks/js/services/metrics';

Application.addBehavior('lazy-image', function(context) {
    'use strict';
    //-----------------------------------------------------------
    // Private
    //-----------------------------------------------------------
    var _element = context.getElement();
    var _modernizr = context.getGlobal('Modernizr');
    var _eventHandlers = {};
    var _srcAttribute = 'data-src';
    var _cropAttribute = 'data-crop';
    var _spanAttribute = 'data-span';
    var _qualityAttribute = 'data-quality';
    var _fitAttribute = 'data-fit';
    var _fillAttribute = 'data-fill';
    var _downsizeAttribute = 'data-downsize';
    var _renderRetry = 0;
    //-----------------------------------------------------------
    // Public
    //-----------------------------------------------------------
    /**
     * Behavior for lazy loading images in the module
     * @mixin behavior:lazy-image
     */
    var lazyImage = {};

    /**
     * Handler for image load event.
     * @memberOf behavior:lazy-image
     * @return {void}
     */
    function _onImageLoaded() {
        context.broadcast(util.getUniqueEventName('lazy-image-loaded', _element), {
            imageEl: this,
        });

        dom.addClass(this, 'img--loaded');
    }

    /**
     * Loads module's images.
     * @memberOf behavior:lazy-image
     * @return {void}
     */
    function _render() {
        var progressiveImages = dom.find(_element, '.js-progressive-image');
        // For some case when module image won't rendered we need to wait
        // One waiting step is 250ms
        // Maximum waiting interval is 1sec
        if (!progressiveImages.length) {
            if (_renderRetry < 4) {
                _renderRetry++;
                setTimeout(_render, 250);

                return;
            }

            return;
        }

        progressiveImages.forEach(function(img) {
            var config = {};
            if (img.hasAttribute('data-mp4-src') && _modernizr.video && _modernizr.android) {
                //This should be factored into a service?
                var video = document.createElement('video');
                video.setAttribute('class', img.getAttribute('class'));
                video.setAttribute('src', img.getAttribute('data-mp4-src'));
                video.setAttribute('loop', true);
                video.setAttribute('preload', 'none');
                video.setAttribute('poster', imageConverter.generate(img.getAttribute(_srcAttribute), config));
                img.parentNode.insertBefore(video, img);
                dom.remove(img);
            } else if (img.hasAttribute(_srcAttribute)) {
                if (img.hasAttribute(_cropAttribute)) {
                    config.crop = img.getAttribute(_cropAttribute);
                }
                if (img.hasAttribute(_spanAttribute)) {
                    config.span = img.getAttribute(_spanAttribute);
                }
                if (img.hasAttribute(_qualityAttribute)) {
                    config.quality = img.getAttribute(_qualityAttribute);
                }
                if (img.hasAttribute(_fitAttribute)) {
                    config.fit = img.getAttribute(_fitAttribute);
                }
                if (img.hasAttribute(_fillAttribute)) {
                    config.fill = img.getAttribute(_fillAttribute);
                }
                if (img.hasAttribute(_downsizeAttribute)) {
                    config.downsize = img.getAttribute(_downsizeAttribute);
                }

                img.onload = _onImageLoaded;
                img.onabort = img.onerror = _trackError;
                img.src = imageConverter.generate(img.getAttribute(_srcAttribute), config);
            }
        });
    }

    _eventHandlers[util.getUniqueEventName('viewport-active', _element)] = _render;

    lazyImage.messages = util.getKeys(_eventHandlers);

    function _trackError() {
        instrument('image', 'error');
    }

    /**
     * Handles event subscriptions.
     * @param {String} msg - event name.
     * @param {*} data - event data.
     * @listens viewport-active
     * @return {void}
     */
    lazyImage.onmessage = function(msg, data) {
        var handler = _eventHandlers[msg];
        if (typeof handler === 'function') {
            handler.call(this, data);
        }
    };

    /**
     * Initialization logic.
     * @ignore
     * @return {void}
     */
    lazyImage.init = function() {};

    /**
     * Cleanup.
     * @ignore
     * @return {void}
     */
    lazyImage.destroy = function() {
        _element = null;
    };

    return lazyImage;
});
export const name = 'lazy-image';