import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import close from './Category.res/close.svg';
import open from './Category.res/open.svg';
import styles from './Category.res/Category.css';

export class Category extends Component {
  state = {
    expanded: false
  }

  static propTypes = {
    toggleCategories: PropTypes.func.isRequired,
    mainCategoryRoute: PropTypes.string.isRequired,
    mainCategoryTitle: PropTypes.string.isRequired,
    nestedCategories: PropTypes.arrayOf(
      PropTypes.shape({
        route: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  }

  toggleNested = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const {
      toggleCategories,
      mainCategoryRoute,
      mainCategoryTitle,
      nestedCategories,
    } = this.props;

    return (
      <div className={ styles.common }>

        <span className={ styles.mainCategoryTitle }>
          { mainCategoryTitle }
          { this.state.expanded
            ? <img className={ styles.expandButton } onClick={ this.toggleNested } src={ close } alt="close-nested-categories"/>
            : <img className={ styles.expandButton } onClick={ this.toggleNested } src={ open } alt="open-nested-categories"/> }
        </span>

        <ul className={ this.state.expanded ? styles.categoryListExpanded : styles.categoryListClosed }>
          { nestedCategories.map((category, index) => (
            <li key={ index } className={ styles.categoryWrapper }>
              <Link
                className={ styles.nestedCategoryTitle }
                activeClassName={ styles.activeLink }
                onClick={ toggleCategories }
                to={`/shop/${mainCategoryRoute}/${category.route}`}>
                { category.title }
              </Link>
            </li>
          )) }
        </ul>

      </div>
    );
  }
}

export default Category;