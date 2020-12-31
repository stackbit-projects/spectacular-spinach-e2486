/* eslint-disable react/no-danger */

import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './research.css';

const Research = ({
  markdown,
}) => (
  <section
    className="research"
    id="research"
  >
    <h2>
      <FontAwesomeIcon icon={faSearch} />
      Research
    </h2>
    <ul className="research__list">
      {
        markdown.map((research) => (
          <li key={research.node.frontmatter.title}>
            {
              research.node.frontmatter.title
              && <h3>{research.node.frontmatter.title}</h3>
            }
            <div>
              {
                research.node.frontmatter.image
                && (
                  <Image
                    alt={research.node.frontmatter.title}
                    className="research__list-image"
                    fluid={research.node.frontmatter.image.childImageSharp.fluid}
                  />
                )
              }
              <div dangerouslySetInnerHTML={{ __html: research.node.html }} />
            </div>
          </li>
        ))
      }
    </ul>
  </section>
);

Research.propTypes = {
  markdown: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          image: PropTypes.shape({}),
          title: PropTypes.string,
        }),
        html: PropTypes.node,
      }),
    }),
  ).isRequired,
};

export default Research;
