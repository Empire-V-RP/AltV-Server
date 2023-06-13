import alt from 'alt-server';
import * as chat from "alt:chat";
import * as verbindung from './MysqlConnection.js';

alt.onClient('TOP0', (player) => {
    const value = 0;
    player.setClothes(11, 0, 0, 0);
  const query = 'SELECT * FROM playerclothes WHERE name = ?';
  verbindung.connection.query(query, [player.name], function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
      verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
        if (err) throw err;
      });
    } else {
      const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
      verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
        if (err) throw err;
      });
    }
  });
});

alt.onClient('TOP1', (player) => {
    const value = 1;
    player.setClothes(11, 1, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('TOP2', (player) => {
    const value = 2;
    player.setClothes(11, 2, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('TOP3', (player) => {
    const value = 3;
    player.setClothes(11, 3, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('TOP4', (player) => {
    const value = 4;
    player.setClothes(11, 4, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('TOP5', (player) => {
    const value = 5;
    player.setClothes(11, 5, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('TOP6', (player) => {
    const value = 6;
    player.setClothes(11, 6, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('TOP7', (player) => {
    const value = 7;
    player.setClothes(11, 7, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('TOP8', (player) => {
    const value = 8;
    player.setClothes(11, 8, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('TOP9', (player) => {
    const value = 9;
    player.setClothes(11, 9, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });


alt.onClient('TOP10', (player) => {
    const value = 10;
    player.setClothes(11, 10, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET top_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, top_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('HOSE1', (player) => {
    const value = 1;
    player.setClothes(4, 1, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('HOSE2', (player) => {
    const value = 2;
    player.setClothes(4, 2, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

    alt.onClient('HOSE3', (player) => {
        const value = 3;
        player.setClothes(4, 3, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

        alt.onClient('HOSE4', (player) => {
            const value = 4;
            player.setClothes(4, 4, 0, 0);
            const query = 'SELECT * FROM playerclothes WHERE name = ?';
            verbindung.connection.query(query, [player.name], function (err, result) {
              if (err) throw err;
              if (result.length > 0) {
                const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
                verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
                  if (err) throw err;
                });
              } else {
                const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
                verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
                  if (err) throw err;
                });
              }
            });
          });

            alt.onClient('HOSE5', (player) => {
                const value = 5;
                player.setClothes(4, 5, 0, 0);
                const query = 'SELECT * FROM playerclothes WHERE name = ?';
                verbindung.connection.query(query, [player.name], function (err, result) {
                  if (err) throw err;
                  if (result.length > 0) {
                    const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
                    verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
                      if (err) throw err;
                    });
                  } else {
                    const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
                    verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
                      if (err) throw err;
                    });
                  }
                });
              });

                alt.onClient('HOSE6', (player) => {
                    const value = 6;
                    player.setClothes(4, 6, 0, 0);
                    const query = 'SELECT * FROM playerclothes WHERE name = ?';
                    verbindung.connection.query(query, [player.name], function (err, result) {
                      if (err) throw err;
                      if (result.length > 0) {
                        const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
                        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
                          if (err) throw err;
                        });
                      } else {
                        const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
                        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
                          if (err) throw err;
                        });
                      }
                    });
                  });


                    alt.onClient('HOSE7', (player) => {
                        const value = 7;
                        player.setClothes(4, 7, 0, 0);
                        const query = 'SELECT * FROM playerclothes WHERE name = ?';
                        verbindung.connection.query(query, [player.name], function (err, result) {
                          if (err) throw err;
                          if (result.length > 0) {
                            const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
                            verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
                              if (err) throw err;
                            });
                          } else {
                            const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
                            verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
                              if (err) throw err;
                            });
                          }
                        });
                      });


                        alt.onClient('HOSE8', (player) => {
                            const value = 8;
                            player.setClothes(4, 8, 0, 0);
                            const query = 'SELECT * FROM playerclothes WHERE name = ?';
                            verbindung.connection.query(query, [player.name], function (err, result) {
                              if (err) throw err;
                              if (result.length > 0) {
                                const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
                                verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
                                  if (err) throw err;
                                });
                              } else {
                                const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
                                verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
                                  if (err) throw err;
                                });
                              }
                            });
                          });

                            alt.onClient('HOSE9', (player) => {

                                const value = 9;
                                player.setClothes(4, 9, 0, 0);
                                const query = 'SELECT * FROM playerclothes WHERE name = ?';
                                verbindung.connection.query(query, [player.name], function (err, result) {
                                  if (err) throw err;
                                  if (result.length > 0) {
                                    const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
                                    verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
                                      if (err) throw err;
                                    });
                                  } else {
                                    const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
                                    verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
                                      if (err) throw err;
                                    });
                                  }
                                });
                              });

                                alt.onClient('HOSE10', (player) => {
                                    const value = 10;
                                    player.setClothes(4, 10, 0, 0);
                                    const query = 'SELECT * FROM playerclothes WHERE name = ?';
                                    verbindung.connection.query(query, [player.name], function (err, result) {
                                      if (err) throw err;
                                      if (result.length > 0) {
                                        const updateQuery = 'UPDATE playerclothes SET legs_style = ? WHERE name = ?';
                                        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
                                          if (err) throw err;
                                        });
                                      } else {
                                        const insertQuery = 'INSERT INTO playerclothes (name, legs_style) VALUES (?, ?)';
                                        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
                                          if (err) throw err;
                                        });
                                      }
                                    });
                                  });


// ARME == Torso


alt.onClient('ARME1', (player) => {
    const value = 1;
    player.setClothes(3, 1, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME2', (player) => {
    const value = 2;
    player.setClothes(3, 2, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME3', (player) => {
    const value = 3;
    player.setClothes(3, 3, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME4', (player) => {
    const value = 4;
    player.setClothes(3, 4, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME5', (player) => {
    const value = 5;
    player.setClothes(3, 5, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME6', (player) => {
    const value = 6;
    player.setClothes(3, 6, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME7', (player) => {
    const value = 7;
    player.setClothes(3, 7, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME8', (player) => {
    const value = 8;
    player.setClothes(3, 8, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME9', (player) => {
    const value = 9;
    player.setClothes(3, 9, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('ARME10', (player) => {
    const value = 10;
    player.setClothes(3, 10, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET torso_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, torso_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });


alt.onClient('SCHUHE1', (player) => {
    const value = 1;
    player.setClothes(6, 1, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE2', (player) => {
    const value = 2;
    player.setClothes(6, 2, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE3', (player) => {
    const value = 3;
    player.setClothes(6, 3, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE4', (player) => {
    const value = 4;
    player.setClothes(6, 4, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE5', (player) => {
    const value = 5;
    player.setClothes(6, 5, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE6', (player) => {
    const value = 6;
    player.setClothes(6, 6, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE7', (player) => {
    const value = 7;
    player.setClothes(6, 7, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE8', (player) => {
    const value = 8;
    player.setClothes(6, 8, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE9', (player) => {
    const value = 9;
    player.setClothes(6, 9, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });

alt.onClient('SCHUHE10', (player) => {
    const value = 10;
    player.setClothes(6, 10, 0, 0);
    const query = 'SELECT * FROM playerclothes WHERE name = ?';
    verbindung.connection.query(query, [player.name], function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = 'UPDATE playerclothes SET shoes_style = ? WHERE name = ?';
        verbindung.connection.query(updateQuery, [value, player.name], function (err, result) {
          if (err) throw err;
        });
      } else {
        const insertQuery = 'INSERT INTO playerclothes (name, shoes_style) VALUES (?, ?)';
        verbindung.connection.query(insertQuery, [player.name, value], function (err, result) {
          if (err) throw err;
        });
      }
    });
  });



alt.onClient('FRISUR1', (player) => {
    const style = 1;
    const color = 1;
    player.setClothes(2, 1, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR2', (player) => {
    const style = 2;
    const color = 1;
    player.setClothes(2, 2, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR3', (player) => {
    const style = 3;
    const color = 1;
    player.setClothes(2, 3, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR4', (player) => {
    const style = 4;
    const color = 1;
    player.setClothes(2, 4, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR5', (player) => {
    const style = 5;
    const color = 1;
    player.setClothes(2, 5, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR6', (player) => {
    const style = 6;
    const color = 1;
    player.setClothes(2, 6, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR7', (player) => {
    const style = 7;
    const color = 1;
    player.setClothes(2, 7, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR8', (player) => {
    const style = 8;
    const color = 1;
    player.setClothes(2, 8, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR9', (player) => {
    const style = 9;
    const color = 1;
    player.setClothes(2, 9, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      

alt.onClient('FRISUR10', (player) => {
    const style = 10;
    const color = 1;
    player.setClothes(2, 10, 1, 0);
    verbindung.connection.query('SELECT * FROM playerclothes WHERE name = ?', [player.name], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          verbindung.connection.query('UPDATE playerclothes SET hair_style = ? WHERE name = ?', [style, player.name], function (err, result) {
            if (err) throw err;
          });
          verbindung.connection.query('UPDATE playerclothes SET hair_texture = ? WHERE name = ?', [color, player.name], function (err, result) {
            if (err) throw err;
          });
        } else {
          verbindung.connection.query('INSERT INTO playerclothes (name, hair_style, hair_texture) VALUES (?, ?, ?)', [player.name, style, color], function (err, result) {
            if (err) throw err;
          });
        }
      });
    });      