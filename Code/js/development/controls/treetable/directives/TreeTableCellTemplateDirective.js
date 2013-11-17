﻿angular.module("keeple.controls.treeTable").directive("ngTreeTableCellTemplate", function ($compile) {
    return {
        restrict: "A",
        scope: {
            item: "=item",
            itemColumn: "=itemColumn"
        },
        link: function ngTreeTableCellTemplate(scope, element) {
            if (scope.itemColumn.hasTemplate) {
                var html = scope.itemColumn.template;
                var e = $compile(html)(scope);
                element.append(e);
            }
            else {
                element.append(scope.itemColumn.value);
            }
        }
    };
});