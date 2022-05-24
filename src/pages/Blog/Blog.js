import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <h2 className="mt-5 mb-5 text-center p-d-heading">My Blogs</h2>

      <div className="border rounded mb-3 p-3">
        <h3 className="border-bottom pb-2">1: Difference between Node.JS and Javascript.</h3>
        <p>NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser.Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.And NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.It is mostly used on the server-side.V8 is the Javascript engine inside of node.js that parses and runs Javascript.</p>
      </div>
      <div className="border rounded mb-3 p-3">
          <h3 className="border-bottom pb-2">1: why should use node js and mongodb?</h3>
          <p>MongoDB is an open-source document database.Instead of storing data in tables of rows or columns like SQL databases, each record in a MongoDB database is a document described in BSON, a binary representation of the data. Applications can then retrieve this information in a JSON format.Document databases are highly flexible, allowing variations in the structure of documents and storing documents that are partially complete. One document can have others embedded in it. Fields in a document play the role of columns in a SQL database, and like columns, they can be indexed to increase search performance.MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.When you use MongoDB, you have the flexibility to scale horizontally through sharding. Sharding is a method for distributing data across multiple servers. When your database exceeds the capacity of its current server, you can begin sharding and split it over two servers. As your database continues to grow, you can continue to add more servers. The advantage is that these new servers don't need to be big, expensive machines-they can be cheaper, commodity hardware. Plus, no downtime is required. <br />Node.js is an open source, a server-side script which runs on the top of Google’s open-source scripting engine V8.Node.js is the greatest tool for building real-time web applications. It provides cross-platform applications which run easily on any web. So you basically don’t need anything extra for running up a node application. You only need for making one. According to the Node.js Survey of users, 43% of Node.js programmers claim to use Node.js for enterprise apps. It’s a light, scalable and open-source language platform which makes it very easy to build apps even at the enterprise level also. Overall it increases the efficiency of the development process as it fills the gap between frontend and backend applications.</p>
      </div>
      <div className="border rounded mb-3 p-3">
          <h3 className="border-bottom pb-2">3: SQL vs NoSQL .</h3>
          <p>SQl Structured Query Language & NoSQL Not Structured Query Language. SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
      </div>
      <div className="border rounded mb-3 p-3">
          <h3 className="border-bottom pb-2">4: How JSON Web Token(JWT) authentication works?</h3>
          <p>JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.</p>
      </div>
    </Container>
  );
};

export default Blog;
