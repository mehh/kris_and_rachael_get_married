import React from "react";
import { Link } from "gatsby";

function List(props) {
  const activePath = props.path;
  const linkPath = props.link;
  if (activePath === linkPath) {
    return <ActiveLink link={linkPath} text={props.text} />;
  } else {
    return <Li link={linkPath} text={props.text} />;
  }
}

function ActiveLink(props) {
  return (
    <li className="active">
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
}

function Li(props) {
  return (
    <li>
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
}

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div id="details">
          <div>
            <a href="/Kris_And_Rachael_get_Married.ics">
              <i className="far fa-calendar-alt" />
              Dec 21, 2019
            </a>
          </div>
          <div>
            <a href="#">
              <i className="fas fa-globe-americas" />
              Laguna Beach, CA
            </a>
          </div>
        </div>
        <ul>
          <List path={this.props.path} link={"/"} text={"Home"} />
          <List path={this.props.path} link={"/schedule"} text={"Schedule"} />
          <List path={this.props.path} link={"/locations"} text={"Locations"} />
          <List path={this.props.path} link={"/registry"} text={"Registry"} />
          <List path={this.props.path} link={"/faq"} text={"FAQ"} />
        </ul>
      </nav>
    );
  }
}
