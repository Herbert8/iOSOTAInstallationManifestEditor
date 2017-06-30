(function () {

    var myModule = angular.module('MyApp');

    // var myMainCtrl = myModule.controller('MyMainController', ['$sce', MyMainController]);
    var myMainCtrl = myModule.controller('MyMainController', ['$sce', MyMainController]);

    function MyMainController($sce) {
        var self = this;

        // 如果需要插入 HTML，可以使用这些代码
        // self.htmlValue = $sce.trustAsHtml("<h1>2222</h1>")
        // 在页面指定 <div  data-ng-bind-html="htmlValue"></div>
        // 详情参考 http://blog.csdn.net/qianqianyixiao1/article/details/51275620

        function htmlEntities(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        var distManifestInfo = {};
        distManifestInfo.title = '';
        distManifestInfo.appURL = '';
        distManifestInfo.displayImageURL = '';
        distManifestInfo.fullSizeImageURL = '';
        distManifestInfo.bundleID = '';

        self.distributionManifestInformation = distManifestInfo;
        self.plistURL = 'https://';

        self.getPlistRefCode = function () {
            var itmsServicesURL = 'itms-services:///?action=download-manifest&url=' + self.plistURL;
            var retCode = '<a href="' + itmsServicesURL + '">点击这里安装</a>';

            return retCode;
        }

        self.hasError = function () {
            return !(typeof (self.plistURL === 'string') && self.plistURL.substr(0, 8) === 'https://');
        }
        self.zzz = '<strong>fff</strong>';
        console.log(self.zzz);
        self.zzz = $sce.trustAsHtml(self.zzz);
        console.log(self.zzz);

        function getTemplateArray() {
            const PARAM_PLACEHOLDER = '--------------------------------------------';
            var tmplText = '<?xml version="1.0" encoding="UTF-8"?>\n' +
                '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n' +
                '<plist version="1.0">\n' +
                '<dict>\n' +
                '    <key>items</key>\n' +
                '    <array>\n' +
                '        <dict>\n' +
                '            <key>assets</key>\n' +
                '            <array>\n' +
                '                <dict>\n' +
                '                    <key>kind</key>\n' +
                '                    <string>software-package</string>\n' +
                '                    <key>url</key>\n' +
                '                    <string>' + PARAM_PLACEHOLDER + '</string>\n' +
                '                </dict>\n' +
                '                <dict>\n' +
                '                    <key>kind</key>\n' +
                '                    <string>display-image</string>\n' +
                '                    <key>url</key>\n' +
                '                    <string>' + PARAM_PLACEHOLDER + '</string>\n' +
                '                </dict>\n' +
                '                <dict>\n' +
                '                    <key>kind</key>\n' +
                '                    <string>full-size-image</string>\n' +
                '                    <key>url</key>\n' +
                '                    <string>' + PARAM_PLACEHOLDER + '</string>\n' +
                '                </dict>\n' +
                '            </array>\n' +
                '            <key>metadata</key>\n' +
                '            <dict>\n' +
                '                <key>bundle-identifier</key>\n' +
                '                <string>' + PARAM_PLACEHOLDER + '</string>\n' +
                '                <key>bundle-version</key>\n' +
                '                <string>1.0</string>\n' +
                '                <key>kind</key>\n' +
                '                <string>software</string>\n' +
                '                <key>title</key>\n' +
                '                <string>' + PARAM_PLACEHOLDER + '</string>\n' +
                '            </dict>\n' +
                '        </dict>\n' +
                '    </array>\n' +
                '</dict>\n' +
                '</plist>';
            var templArray = tmplText.split(PARAM_PLACEHOLDER);
            var dataArray = [];
            var newData = {};
            templArray.forEach(function (element) {
                newData = {};
                newData.template = element;
                console.log(element);
                dataArray.push(newData);
            });
            return dataArray;
        }

        self.templateArray = getTemplateArray();

        self.getTemplateAndDataArray = function () {
            if (self.templateArray.length > 5) {
                self.templateArray[0].param = self.distributionManifestInformation.appURL;
                self.templateArray[1].param = self.distributionManifestInformation.displayImageURL;
                self.templateArray[2].param = self.distributionManifestInformation.fullSizeImageURL;
                self.templateArray[3].param = self.distributionManifestInformation.bundleID;
                self.templateArray[4].param = self.distributionManifestInformation.title;
            }
            return self.templateArray;
        }

        self.isParamValid = function (item, index) {
            return item.param && item.param.trim().length > 0;
        }

        self.isBeyondLastParam = function (index) {
            return index === self.getTemplateAndDataArray().length - 1;
        }

    };


})();