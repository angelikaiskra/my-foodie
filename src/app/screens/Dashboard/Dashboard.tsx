import React from 'react';

import classes from './Dashboard.module.scss';

import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBox from '../../components/FilterBox/FilterBox';
import RecipeBox from '../../components/RecipeBox/RecipeBox';

function Dashboard(): JSX.Element {
  return (
    <Container>
      <div className={classes.dashboard}>
        <SearchBar />

        <section className={classes.filterBoxes}>
          <FilterBox title={'Śniadanie'} image={'breakfast'} />
          <FilterBox title={'Obiad'} image={'mainDish'} />
          <FilterBox title={'Lunch'} image={'lunch'} />
          <FilterBox title={'Kolacja'} image={'dinner'} />
        </section>

        <section>
          <h2>Ostatnio dodane</h2>
          <div className={classes.lastAdded}>
            <RecipeBox
              title={'Filety z kurczaka w parmezanowej panierce'}
              imageUrl={
                'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/filety-w-parmezanowej-panierce.jpg'
              }
              prepTime={15}
              link={'/przepis/filety-z-kurczaka-w-parmezanowej-parnierce'}
            />
            <RecipeBox
              title={'Filety z kurczaka w parmezanowej panierce'}
              imageUrl={
                'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/filety-w-parmezanowej-panierce.jpg'
              }
              prepTime={15}
              link={'/przepis/filety-z-kurczaka-w-parmezanowej-parnierce'}
            />
            <RecipeBox
              title={'Filety z kurczaka w parmezanowej panierce'}
              imageUrl={
                'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/filety-w-parmezanowej-panierce.jpg'
              }
              prepTime={15}
              link={'/przepis/filety-z-kurczaka-w-parmezanowej-parnierce'}
            />
            <RecipeBox
              title={'Filety z kurczaka w parmezanowej panierce'}
              imageUrl={
                'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/filety-w-parmezanowej-panierce.jpg'
              }
              prepTime={15}
              link={'/przepis/filety-z-kurczaka-w-parmezanowej-parnierce'}
            />
          </div>
        </section>
      </div>
    </Container>
  );
}

export default Dashboard;
