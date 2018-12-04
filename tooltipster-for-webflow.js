var tooltipsterTrigger = 'custom';

var tooltipsterTriggerOpen = {
    mouseenter: true,
    touchstart: true,
    tap: true,
    click: true
};

var tooltipsterTriggerClose = {
    mouseleave: true,
    scroll: true,
    tap: true
};

function initTooltipster(containerToInit) {
    containerToInit = containerToInit || 'body';
    console.log(containerToInit);
    $(containerToInit).not('.tooltipstered').find('[tooltipster="top"]:not(.tooltipstered)').tooltipster({
        position: 'top',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="bottom"]:not(.tooltipstered)').tooltipster({
        position: 'bottom',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="left"]:not(.tooltipstered)').tooltipster({
        position: 'left',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="right"]:not(.tooltipstered)').tooltipster({
        position: 'right',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="right-delay"]:not(.tooltipstered)').tooltipster({
        position: 'right',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="top-delay"]:not(.tooltipstered)').tooltipster({
        position: 'top',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="left-delay"]:not(.tooltipstered)').tooltipster({
        position: 'left',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="bottom-delay"]:not(.tooltipstered)').tooltipster({
        position: 'bottom',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
}

//also init tooltipster immediately, to prevent bugs and calling methods on uninitialised elements
initTooltipster();

$(document).on('preloadingComplete', function() {
    initTooltipster();
});
