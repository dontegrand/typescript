"use strict";
var Componets;
(function (Componets) {
    var SubCompontents;
    (function (SubCompontents) {
        var SubContent = /** @class */ (function () {
            function SubContent() {
                var subcontent = document.createElement('div');
                subcontent.innerText = 'this is subcontent';
                document.body.appendChild(subcontent);
            }
            return SubContent;
        }());
        SubCompontents.SubContent = SubContent;
    })(SubCompontents = Componets.SubCompontents || (Componets.SubCompontents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var header = document.createElement('div');
            header.innerText = 'this is Header';
            document.body.appendChild(header);
        }
        return Header;
    }());
    Componets.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var header = document.createElement('div');
            header.innerText = 'this is Content';
            document.body.appendChild(header);
        }
        return Content;
    }());
    Componets.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var header = document.createElement('div');
            header.innerText = 'this is Footer';
            document.body.appendChild(header);
        }
        return Footer;
    }());
    Componets.Footer = Footer;
})(Componets || (Componets = {}));
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Componets.Header();
            new Componets.Content();
            new Componets.SubCompontents.SubContent();
            new Componets.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
