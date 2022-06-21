import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from './filtersSlice'
import Typography from '@mui/material/Typography';

const Footer = () => (
  <div>
    <Typography variant="overline"  component="span" gutterBottom>Show: </Typography>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer
