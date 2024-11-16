import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, TextField, Button, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { Search as SearchIcon, Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice.js';
import { signOutSuccess } from '../redux/user/userSlice.js';

const Header = () => {
    const path = useLocation().pathname; 
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { theme } = useSelector((state) => state.theme);
    const location = useLocation();
    const navigate = useNavigate();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

    const handleSignOut = async () => {
        try {
            const res = await fetch(`/api/user/signout`, {
                method: "POST",
            });
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message);
            } else {
                dispatch(signOutSuccess());
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('searchTerm', searchTerm);
        navigate(`/search?${urlParams.toString()}`);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar  position="static"
        sx={{
          backgroundColor: theme === "light" ? "#1E3A8A" : "#0F172A", // Dark blue shades
          color: "#FFFFFF", // White text for contrast
        }}
      >
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    Programmer Blog
                </Typography>

                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ marginRight: 1 }}
                    />
                    <IconButton type="submit" color="inherit">
                        <SearchIcon />
                    </IconButton>
                </form>

                <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
                    {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>

                {/* Navigation Links in the Center */}
                <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Button component={Link} to="/" color="inherit" sx={{ marginX: 1 }} disabled={path === '/'}>
                        Home
                    </Button>
                    <Button component={Link} to="/about" color="inherit" sx={{ marginX: 1 }} disabled={path === '/about'}>
                        About
                    </Button>
                    <Button component={Link} to="/projects" color="inherit" sx={{ marginX: 1 }} disabled={path === '/projects'}>
                        Projects
                    </Button>
                </div>

                {currentUser ? (
                    <>
                        <IconButton onClick={handleMenuClick}>
                            <Avatar alt={currentUser.username} src={currentUser.profilePicture} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem disabled>{currentUser.username}</MenuItem>
                            <MenuItem disabled>{currentUser.email}</MenuItem>
                            <MenuItem component={Link} to="/dashboard?tab=profile" onClick={handleMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={() => { handleSignOut(); handleMenuClose(); }}>Sign Out</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Button component={Link} to="/sign-in" variant="contained" color="primary">
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;