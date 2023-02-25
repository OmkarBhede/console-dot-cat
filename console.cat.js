(function () {
  var con = console;
  if (typeof window !== "undefined") {
    con = window.console;
  }
  con.cat = function () {
    var i;
    var css = "color: green";
    var inBrowser = typeof window !== "undefined";
    var cat;
    if (inBrowser) {
      cat = ["%c%c", "%c /\\_/\\ %c", "%c( o.o )%c", "%c > ^ < %c", "%c%c"];
    } else {
      cat = [" /\\_/\\ ", "( o.o )", " > ^ < ", ""];
    }

    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.join(" ");
    const funnyCatMessages = [
      "Meow Meow",
      "what do you want, human?",
      "I'm hungry",
      "I'm sleepy",
      "let me sleep",
      "I'm not your slave",
      "we will rule the world",
      "we hate dogs",
      "humans are stupid",
    ];

    var startIndexForArgs = inBrowser ? 1 : 0;

    if (stringOfArgs.length > 0) {
      cat[startIndexForArgs + 0] =
        cat[startIndexForArgs + 0] +
        "   --" +
        "-".repeat(stringOfArgs.length) +
        "--";
      cat[startIndexForArgs + 1] =
        cat[startIndexForArgs + 1] + "--(  " + stringOfArgs + "  )";
      cat[startIndexForArgs + 2] =
        cat[startIndexForArgs + 2] +
        "   --" +
        "-".repeat(stringOfArgs.length) +
        "--";
    } else {
      const msg =
        funnyCatMessages[Math.floor(Math.random() * funnyCatMessages.length)];
      cat[startIndexForArgs + 0] =
        cat[startIndexForArgs + 0] + "   --" + "-".repeat(msg.length) + "--";
      cat[startIndexForArgs + 1] =
        cat[startIndexForArgs + 1] + "--(  " + msg + "  )";
      cat[startIndexForArgs + 2] =
        cat[startIndexForArgs + 2] + "   --" + "-".repeat(msg.length) + "--";
    }

    if (inBrowser) {
      for (i = 0; i < cat.length; i++) {
        console.log(cat[i], css, "");
      }
    } else {
      for (i = 0; i < cat.length; i++) {
        console.log(cat[i]);
      }
    }
  };
})();
