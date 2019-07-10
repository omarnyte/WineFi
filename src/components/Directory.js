import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import "./layout.css"
import directoryStyles from "../styles/directory.module.scss";

export const PureDirectory = ({ data }) => (
  <div className={directoryStyles.directory}>
    <h2>Directory</h2>
    <ul className={directoryStyles.directoryItems}>
      {data.allContentfulPlace.group.map(group => (
        <li className={directoryStyles.cityLi} key={group.fieldValue}>
          <h3>{group.fieldValue}</h3>
          <ul>
            {group.edges.map(edge => (
              <li className={directoryStyles.placeLi} key={edge.node.id}>{edge.node.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allContentfulPlace(sort: {fields: name}) {
          group(field: city) {
            fieldValue
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    `}
    render={data => <PureDirectory data={data} {...props} />}
  />
)

PureDirectory.propTypes = {
  data: PropTypes.shape({
    allContentfulPlace: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          edges: PropTypes.arrayOf(
            PropTypes.shape({
              node: PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string
              }).isRequired
            }).isRequired
          ).isRequired
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}
