import {configure} from '@storybook/react';

if (typeof window === 'object' && window.navigator && (/node\.js/i).test(window.navigator.userAgent)) {
    let addons = require('@storybook/addons').default;
    let Channel = require('@storybook/channels').default;
    addons.setChannel(new Channel({
        transport: {
            setHandler: function () {
            },
            send: function () {
            }
        }
    }));
}


const disableAnimationsIfNeeded = () => {
    const env = process.env;
    const isAppliToolsStorybookTest = env && env.STORYBOOK_APPLITOOLS_TESTS === 'true';

    if (isAppliToolsStorybookTest) {
        document.documentElement.style.setProperty('--animation-duration-multiplier', '0');
    }
};

function loadStories() {
    require("../src/stories/AnimatedComponent");
    disableAnimationsIfNeeded();
}

configure(loadStories, module);

if (typeof window === 'object') {
    window.__storybook_stories__ = require('@storybook/react').getStorybook();
}
