import React from 'react'
import { Route } from 'react-router-dom'
import { About, Github, Home, Services, User } from '../../components/index.js'
import { githubInfoLoader } from '../../components/Github/Github.jsx'



export const PublicRoutes = (
  <>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="user/:userId" element={<User />} />
    <Route path="services" element={<Services />} />
    <Route path="github" element={<Github />} loader={githubInfoLoader} />
  </>
);
