/**
 * SocialLinks component
 *
 * Renders a row of icon links for social networks.
 * Configure the list via the `socials` prop (passed from siteProps in App.jsx).
 */
import React from "react";
import PropTypes from "prop-types";

import githubIcon from "../images/socials/github.svg";
import linkedinIcon from "../images/socials/linkedin.svg";
import twitterIcon from "../images/socials/twitter.svg";
import instagramIcon from "../images/socials/instagram.svg";
import envelopeIcon from "../images/socials/envelope.svg";

const ICON_MAP = {
  github: githubIcon,
  linkedin: linkedinIcon,
  twitter: twitterIcon,
  instagram: instagramIcon,
  email: envelopeIcon,
};

const SocialLinks = ({ socials }) => {
  if (!socials || socials.length === 0) return null;

  return (
    <div className="social-links">
      {socials.map(({ network, url, label }) => {
        const icon = ICON_MAP[network];
        if (!url || !icon) return null;
        const isEmail = network === "email";
        return (
          <a
            key={network}
            href={isEmail ? `mailto:${url}` : url}
            aria-label={label || network}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="social-link"
          >
            <img src={icon} alt="" aria-hidden="true" width="20" height="20" />
          </a>
        );
      })}
    </div>
  );
};

SocialLinks.defaultProps = {
  socials: [],
};

SocialLinks.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      network: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),
};

export default SocialLinks;
