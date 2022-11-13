// npm i express
// http://127.0.0.1:3000

const express = require("express");
const Iconv = require("iconv").Iconv;
const port = 3000;
const app = express();
const host = "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let memory = "";
app.get("/", (req, res) => {
  res.send(render(1));
});

app.post("/", (req, res) => {
  memory = req.body;
  if (memory.inputtext && memory.charset) {
    res.send(render(2, getChs(memory)));
  } else {
    res.send(render(1));
  }

  console.log(memory);
});

app.listen(process.env.PORT || 3000, host, () => {
  console.log(
    `App Started on PORT ${
      process.env.PORT || 3000
    } \n http://${host}:${port} \n Click Ctrl + C for stop server`
  );
});

function render(type, par = "") {
  let result1 = `<h1>Charset</h1>
      <form action="/" method="POST">
      <label for="text">Change charset:</label>
      <input type="text" name="inputtext"placeholder="Input string">
      <select name="charset" id="charset" multiple>
          <option value="UTF-8">UTF-8</option>
          <option value="base64">base64</option>
          <option value="Windows-1252">Windows-1252</option>
      </select>
      <button type="submit">Change charset</button>
      <button onclick="location.href='/'">Clear</button>
      </form>
      `;
  let result2 = `<h1>Charset</h1>
      <form action="/" method="POST">
      <label for="inputtext">Change charset:</label>
      <input type="text" name="inputtext"placeholder="Input string">
      <select name="charset" id="charset" multiple>
          <option value="UTF-8">UTF-8</option>
          <option value="base64">base64</option>
          <option value="Windows-1252">Windows-1252</option>
      </select>
      <button type="submit">Change charset</button>
      <button onclick="location.href='/'">Clear</button>
      </form>
      ${par}
      `;
  if (type == 1) {
    return result1;
  }
  if (type == 2) {
    return result2;
  }
}

function getChs(param) {
  let result = `<p>Input string:<textarea type="current_charset" cols="20" rows="3" placeholder="${param.inputtext}"></textarea><p>`;
  if (typeof param.charset === "string") {
    return result + getString(param.charset, param.inputtext);
  } else {
    param.charset.forEach((item) => {
      result += getString(item, param.inputtext);
    });
    return result;
  }
}

function getString(coding, text) {
  if (coding == "UTF-8") {
    return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${text}"></textarea><p>`;
  } 
  if(coding == "Windows-1252") {
    return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${new Iconv(
      'UTF-8',
      coding
    )
      .convert(text)
      .toString()}"></textarea><p>`;
  }
return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${new Iconv(
    'ISO-8859-1',
    'UTF-8'
  )
    .convert(text)
    .toString()
    }"></textarea><p>`;

  
  //    if(coding == 'UTF-8'){
  //        return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${text}"></textarea><p>`;
  //    }else if(coding == 'ISO-8859-1'){
  //     return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${text}"></textarea><p>`;
  //    }else if(coding == 'Windows-1252'){
  //     return `<p>${coding}<textarea type="current_charset" cols="20" rows="3" placeholder="${text}"></textarea><p>`;
  //    }
}