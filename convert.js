var mysql = require("mysql");
const telegraph = require("telegraph-node");
const ph = new telegraph();

var con = mysql.createConnection({
  host: "mysql77.hostland.ru",
  user: "host819157",
  password: "password",
  database: "host819157",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM js01 WHERE id=19", function (err, result, fields) {
    if (err) throw err;
    console.log(result);

    // Object.keys(result).forEach(function (key) {
    //   var row = result[key];
    //   console.log(row.b1);
    // });
    let token = "b968da509bb76866c35425099bc0989a5ec3b32997d55286c657e6994bbb";

    let wo1 = result[0].wo1;
    let ai1 = result[0].ai1;
    let ni1 = result[0].ni1;

    let wo2 = result[0].wo2;
    let ai2 = result[0].ai2;
    let ni2 = result[0].ni2;

    let wo3 = result[0].wo3;
    let ai3 = result[0].ai3;
    let ni3 = result[0].ni3;

    let wo4 = result[0].wo4;
    let ai4 = result[0].ai4;
    let ni4 = result[0].ni4;

    let wo5 = result[0].wo5;
    let ai5 = result[0].ai5;
    let ni5 = result[0].ni5;

    let wo6 = result[0].wo6;
    let ai6 = result[0].ai6;
    let ni6 = result[0].ni6;

    let wo7 = result[0].wo7;
    let ai7 = result[0].ai7;
    let ni7 = result[0].ni7;

    let wo8 = result[0].wo8;
    let ai8 = result[0].ai8;
    let ni8 = result[0].ni8;

    let wo9 = result[0].wo9;
    let ai9 = result[0].ai9;
    let ni9 = result[0].ni9;

    /**
     * Shows something if variable is set, and shows nothing if variable is NULL
     */
    function isEmpty(val) {
      return val === undefined || val == null || val.length <= 0
        ? true
        : "[перейти]";
    }

    ph.createPage(
      token,
      "Метро в Тбилиси",
      [
        {
          tag: "img",
          attrs: {
            src: wo1,
          },
        },

        {
          tag: "p",
          children: [
            ai1,
            {
              tag: "a",
              attrs: { href: ni1, target: "_blank" },
              children: [isEmpty(ni1)],
            },
          ],
        },

        {
          tag: "img",
          attrs: {
            src: wo2,
          },
        },

        {
          tag: "p",
          children: [
            ai2,
            {
              tag: "a",
              attrs: { href: ni2, target: "_blank" },
              children: [isEmpty(ni2)],
            },
          ],
        },

        {
          tag: "img",
          attrs: {
            src: wo3,
          },
        },

        {
          tag: "p",
          children: [
            ai3,
            {
              tag: "a",
              attrs: { href: ni3, target: "_blank" },
              children: [isEmpty(ni3)],
            },
          ],
        },

        {
          tag: "img",
          attrs: {
            src: wo4,
          },
        },

        {
          tag: "p",
          children: [
            ai4,
            {
              tag: "a",
              attrs: { href: ni4, target: "_blank" },
              children: [isEmpty(ni4)],
            },
          ],
        },

        {
          tag: "img",
          attrs: {
            src: wo5,
          },
        },

        {
          tag: "p",
          children: [
            ai5,
            {
              tag: "a",
              attrs: { href: ni5, target: "_blank" },
              children: [isEmpty(ni5)],
            },
          ],
        },

        {
          tag: "img",
          attrs: {
            src: wo6,
          },
        },

        {
          tag: "p",
          children: [
            ai6,
            {
              tag: "a",
              attrs: { href: ni6, target: "_blank" },
              children: [isEmpty(ni6)],
            },
          ],
        },

        {
          tag: "img",
          attrs: {
            src: wo7,
          },
        },

        {
          tag: "p",
          children: [
            ai7,
            {
              tag: "a",
              attrs: { href: ni7, target: "_blank" },
              children: [isEmpty(ni7)],
            },
          ],
        },

        {
          tag: "img",
          attrs: {
            src: wo8,
          },
        },

        {
          tag: "p",
          children: [
            ai8,
            {
              tag: "a",
              attrs: { href: ni8, target: "_blank" },
              children: [isEmpty(ni8)],
            },
          ],
        },

        {
          tag: "img",
          attrs: {
            src: wo9,
          },
        },

        {
          tag: "p",
          children: [
            ai9,
            {
              tag: "a",
              attrs: { href: ni9, target: "_blank" },
              children: [isEmpty(ni9)],
            },
          ],
        },
      ],

      {
        return_content: true,
      }
    ).then((result) => {
      console.log(result);
    });

    //Эти две фигурных скобок исходят из MySQL функций,
    //т.к. не удалось сделать result глобальным
  });
});
