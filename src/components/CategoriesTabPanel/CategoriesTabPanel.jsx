import * as React from 'react';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  selectCategoryList,
  selectRecipesByCategoryList,
} from 'redux/recipes/recipesSelectors';
import { fetchRecipesByCategory } from 'redux/recipes/recipesOperations';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import { List, RecipesContainer } from './CategoriesTabPanel.styled';

const CategoriesTabPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [pageName, setPageName] = useState('Beef');
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  const categoryList = Object.entries(useSelector(selectCategoryList));
  const response = useSelector(selectRecipesByCategoryList);
  const recipesByCategoryList = Object.entries(response);
  const countPages = Math.ceil(response.total / response.limit)
    ? Math.ceil(response.total / response.limit)
    : 1;

  useEffect(() => {
    const query = location.pathname.split('/')[2];
    const formattedQuery = query.charAt(0).toUpperCase() + query.slice(1);
    setPageName(formattedQuery);

    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, [location]);

  const handleChange = (event, newValue) => {
    setPageName(newValue);
    setCurrentPage(1);
    setShow(false);
    navigate(`/categories/${newValue}`);
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  };

  const handleChangePagination = (e, value) => {
    setShow(false);
    dispatch(
      fetchRecipesByCategory({ categoryName: pageName, limit: 8, page: value })
    );
    setCurrentPage(value);
    window.scrollTo(0, 100);
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  };
  return (
    <>
      <ThemeProvider theme={MuiProviderTheme}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={pageName}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} variant="scrollable">
                {categoryList.flatMap(item => {
                  return (
                    <Tab
                      label={item[1].title}
                      value={item[1].title}
                      key={item[1].title}
                    />
                  );
                })}
              </TabList>
            </Box>
            <TabPanel
              value={pageName}
              sx={{ padding: '0', typography: 'body1' }}
            >
              <Fade in={show}>
                <RecipesContainer>
                  {recipesByCategoryList.flatMap((item, key) => {
                    return (
                      <div key={item[0]}>
                        {key === 0 ? (
                          <List>
                            <RecipeCard recipe={item[1]}></RecipeCard>
                          </List>
                        ) : null}
                      </div>
                    );
                  })}
                </RecipesContainer>
              </Fade>
              <Stack spacing={2}>
                <Pagination
                  page={currentPage}
                  count={countPages}
                  onChange={handleChangePagination}
                  defaultPage={1}
                />
              </Stack>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default CategoriesTabPanel;
