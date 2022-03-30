
import React from 'react';
import {useState} from 'react';
import {SearchList} from './SearchList';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  

 export function SearchProduct({details}){
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredProducts = details.filter(
      product => {
          return(
              product
              .title
              .toLowerCase()
              .includes(searchField.toLowerCase()) ||
        
               product 
               .offerPrice
               .toLowerCase()
               .includes(searchField.toLowerCase())
          );
      }
  );

  const handleChange = e => {
      setSearchField(e.target.value);
      if(e.target.value === ""){
        setSearchShow(false);
      }
      else{
        setSearchShow(true);
      }
  };

  function searchList(){
    if(searchShow){
      return(
          <div>
              <SearchList filteredProducts={filteredProducts} />
          </div>
    );
  }
}
    return(
        <div>
        <AppBar position="static">
         <Toolbar>
           <MobileScreenShareIcon />
           <h2>Mobile shop</h2>
           
           <Search style={{marginLeft:"auto"}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search mobile…"
                type="search"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange} />
            </Search>
          
         </Toolbar>
         </AppBar>
         
         {searchList()}
         </div>
    );
}