var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function () {
    //an instance of the element is created
};
proto.attachedCallback = function () {
    //an instance was inserted into the document
};
proto.attributeChangedCallback = function (attrName, oldVal, newVal) {
    //an attribute was added, removed, or updated
};
proto.detachedCallback = function () {
    //an instance was removed from the document
};

var XFoo = document.registerElement('x-foo', {
    prototype: proto
});