var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

function test() {
    var a = obj.a;
      var b = obj[ 'bcd' ];
        var c = obj["c"];
    var d = obj[b];
}

obj["invalid_accessor"];
obj["_AnotherInvalidAccessor"];

// valid accessors
obj["a-2"];
obj["2a"];
obj["?a#$!$^&%&"];
