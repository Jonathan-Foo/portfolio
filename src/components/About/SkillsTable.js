import React from "react";
import styled from "styled-components";

function SkillsTable() {
  return (
    <TableWrapper>
      <tbody>
        <tr>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
              width="48"
              height="48"
              alt="HTML"
            />
            <br />
            <strong>HTML5</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              width="48"
              height="48"
              alt="CSS3"
            />
            <br />
            <strong>CSS3</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              width="48"
              height="48"
              alt="Sass"
            />
            <br />
            <strong>Sass</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              width="48"
              height="48"
              alt="JavaScript"
            />
            <br />
            <strong>JavaScript</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              width="48"
              height="48"
              alt="TypeScript"
            />
            <br />
            <strong>TypeScript</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              width="48"
              height="48"
              alt="React"
            />
            <br />
            <strong>React</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              width="48"
              height="48"
              alt="Redux"
            />
            <br />
            <strong>Redux</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              width="48"
              height="48"
              alt="Material UI"
            />
            <br />
            <strong>MaterialUI</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
              width="48"
              height="48"
              alt="Bootstrap"
            />
            <br />
            <strong>Bootstrap</strong>
          </td>
        </tr>
        <tr>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              width="48"
              height="48"
              alt="Node.js"
            />
            <br />
            <strong>Node.js</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              width="48"
              height="48"
              alt="Express"
            />
            <br />
            <strong>Express</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              width="48"
              height="48"
              alt="MongoDB"
            />
            <br />
            <strong>MongoDB</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              width="48"
              height="48"
              alt="Firebase"
            />
            <br />
            <strong>Firebase</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
              width="48"
              height="48"
              alt="Mongoose"
            />
            <br />
            <strong>Heroku</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              width="48"
              height="48"
              alt="Git"
            />
            <br />
            <strong>Git</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              width="48"
              height="48"
              alt="Npm"
            />
            <br />
            <strong>Npm</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              width="48"
              height="48"
              alt="Jest"
            />
            <br />
            <strong>Jest</strong>
          </td>
          <td align="center" height="108" width="108">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg"
              width="48"
              height="48"
              alt="Webpack"
            />
            <br />
            <strong>Webpack</strong>
          </td>
        </tr>
      </tbody>
    </TableWrapper>
  );
}

const TableWrapper = styled.table`
  margin-top: 0.3rem;
  tbody {
    outline: 1px dashed rgba(255, 255, 255, 1);
  }
  td {
    outline: 1px dashed rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default SkillsTable;
