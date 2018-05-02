import assert from "assert";

import initializeDb from "../db";

describe("Database", function() {
  it("should connect to the DB", function(done) {
    initializeDb(db => {
      assert.equal(db.connection.readyState, 1);
      done();
    });
  });
});
