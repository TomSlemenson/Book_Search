import React from "react";

const styles = {
  card: {padding:"100px"},
};

function NoMatch() {
  return (
    <div className="container text-center">
      <h1 style={styles.card} className="card text-center mt-5">404 Page Not Found<small class="pt-3">check your url...</small></h1>
    </div>
  );
}


export default NoMatch;
