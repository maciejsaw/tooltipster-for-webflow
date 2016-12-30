# Tooltipster for Webflow
Easily add tooltips to your Weblow.io website, without leaving the "Designer" interface. 

## Demo
* [Demo page](http://tooltipster-for-webflow.webflow.io/)
* [Webflow Designer read-only preview](https://preview.webflow.com/preview/tooltipster-for-webflow?preview=39d81ae683037bfa1f8c9de86a20c59c)

## Quick start

### Step 1:
Paste the following code into the "Custom code" section inside Webflow Site settings

Add the end of the \</head> tag
```
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/iamceege/tooltipster/master/dist/css/tooltipster.bundle.min.css">
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/iamceege/tooltipster/master/src/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.css">
```
Add code before \</body> tag:
```
<script src="https://cdn.rawgit.com/iamceege/tooltipster/master/dist/js/tooltipster.bundle.min.js"></script>
<script src="https://cdn.rawgit.com/maciejsaw/tooltipster-for-webflow/master/tooltipster-for-webflow.js"></script>
```

This will load the scripts from a free server that hosts Github files. 
(it's a free service so there is no guarantee of uptime)

### Step 2:
Add tooltips in Webflow Designer by using custom attributes
* Add an attribute ```tooltipster="top"```
* Add ```title="Your tooltip text``` attribute with your content
