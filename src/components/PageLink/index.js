import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../../contexts/PageContext';
import './index.css';

function PageLink({
  linkTo,
  linkText,
  linkPlace,
  activeClassName,
}) {
  const page = useContext(PageContext);

  const linkPageType = page === "savedNews"
    ? "page-link__page_saved-news"
    : "";

  const linkActive = activeClassName
    ? "page-link__header_active"
    : "";

  let linkType;

  if (linkPlace === "popupLoginRegister") {
    linkType = "page-link__place_popup page-link__login-register";
  } else if (linkPlace === "popupInfoTooltip") {
    linkType = "page-link__place_popup page-link__info-tooltip";
  } else if (linkPlace === "headerLogo") {
    linkType = "page-link__place_logo";
  } else if (linkPlace === "headerMenu") {
    linkType = "page-link__place_menu page-link__header";
  } else if (linkPlace === "footerMenu") {
    linkType = "page-link__place_menu page-link__footer";
  }

  return (
    <Link
      className={`page-link ${linkType} ${linkPageType} ${linkActive}`}
      to={linkTo}
    >
      {linkText}
    </Link>
  );
}

export default PageLink;