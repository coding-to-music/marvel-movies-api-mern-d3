const express = require("express");
const router = express.Router();

const md5 = require("md5"); //npm install md5
const axios = require("axios");

/* MARVEL AUTHENTIFICATION ******/

/* Server-side applications must pass two parameters in addition to the apikey parameter:
- ts  : a timestamp = millisecond number since 01/01/1970,
- hash : a md5 digest of the ts parameter, your private key and your public key */

//LE HASH SERT A CRYPTER DES DONNEES
//TS doit etre un timestamp: = nb de millisecondes de puis le 1er janvier 1970
const date = new Date();
const ts = date.getTime();

//ou TS peut etre une String aleatoire
// const uid2 = require("uid2");
// const value = uid2(6);

const secured = md5(ts + process.env.SECKEY + process.env.PUBLICKEY);

/* COMICS **************************/

// with pagination

//
router.get("/comics/", async (req, res) => {
  try {
    if (req.query.titleStartsWith) {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?titleStartsWith=${req.query.titleStartsWith}&orderBy=title&ts=${ts}&apikey=${process.env.PUBLICKEY}&hash=${secured}`
      );
      res.json(response.data);
    } else {
      if (req.query.offset) {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/comics?orderBy=title&limit=100&offset=${req.query.offset}&ts=${ts}&apikey=${process.env.PUBLICKEY}&hash=${secured}`
        );
        res.json(response.data);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/comics/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters/${req.params.id}/comics?ts=${ts}&apikey=${process.env.PUBLICKEY}&hash=${secured}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
  }
});

/* CHARACTERS **********************/

router.get("/characters/", async (req, res) => {
  try {
    if (req.query.nameStartsWith) {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${req.query.nameStartsWith}&ts=${ts}&apikey=${process.env.PUBLICKEY}&hash=${secured}`
      );
      res.json(response.data);
    } else {
      if (req.query.offset) {
        const response = await axios.get(
          `http://gateway.marvel.com/v1/public/characters?limit=100&offset=${req.query.offset}&ts=${ts}&apikey=${process.env.PUBLICKEY}&hash=${secured}`
        );
        res.json(response.data);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
});

/* FAVORITES ********************************/

router.post("/favorites", async (req, res) => {
  const favorites = req.fields.favorites;

  let favTab = [[], []];
  try {
    for (let i = 0; i < favorites.length; i++) {
      if (i === 0) {
        for (let j = 0; j < favorites[i].length; j++) {
          const response = await axios.get(
            `http://gateway.marvel.com/v1/public/characters/${favorites[i][j]}?ts=${ts}&apikey=${process.env.PUBLICKEY}&hash=${secured}`
          );

          favTab[0].push(response.data.data);
        }
      } else {
        for (let j = 0; j < favorites[i].length; j++) {
          const response = await axios.get(
            `http://gateway.marvel.com/v1/public/comics/${favorites[i][j]}?ts=${ts}&apikey=${process.env.PUBLICKEY}&hash=${secured}`
          );

          favTab[1].push(response.data.data);
        }
      }
    }
    res.json(favTab);
  } catch (error) {
    console.log("favorites", error.message);
  }
});

module.exports = router;
