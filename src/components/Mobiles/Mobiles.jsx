import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Mobiles.scss"
import MobilesCard from './MobilesCard';
import FlashDealsCard from '../Flashdeals/FlashDealsCard';
import {FlashDealsData} from "../dummyData"
import appleLogo from "../../assets/images/logo.svg";
import {Mobiles, SmartWatches, Earphones, SmartCameras, Playstations, Televisions} from "../dummyData";

import { useDispatch } from 'react-redux';
import { addToCart } from '../../ReduxToolkit/cartSlice';
    
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };
    
    function a11yProps(index) {
      return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
      };
    }
    
    export default function VerticalTabs() {
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
        <div className="mobiles">
            <div className="container">
            <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "fit-content" }}
        >
          <Tabs className="tabs"
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Mobiles" {...a11yProps(0)} />
            <Tab label="Smart Watches" {...a11yProps(1)} />
            <Tab label="Earphones" {...a11yProps(2)} />
            <Tab label="Smart Cameras" {...a11yProps(3)} />
            <Tab label="Playstations" {...a11yProps(4)} />
            <Tab label="Televisions" {...a11yProps(5)} />
            <Tab label="View All" {...a11yProps(6)} />
          </Tabs>
          <TabPanel value={value} index={0} className="tabPanel">
                <div className="itemsWrapper">
                            {
                            Mobiles.map( (item, index) => (
                            <MobilesCard key={index} product={item} addToCart={addToCart}/>
                            ))
                            }
                </div>
          </TabPanel>

          <TabPanel value={value} index={1} className="tabPanel">

            <div className="itemsWrapper">
                            {
                            SmartWatches.map( (item, index) => (
                            <MobilesCard key={index} product={item} addToCart={addToCart}/>
                            ))
                            }
                </div>
          </TabPanel>

          <TabPanel value={value} index={2} className="tabPanel">
                <div className="itemsWrapper">
                    {
                    Earphones.map( (item, index) => (
                    <MobilesCard key={index} product={item} addToCart={addToCart}/>
                    ))
                    }
                </div>
          </TabPanel>

          <TabPanel value={value} index={3} className="tabPanel">
          <div className="itemsWrapper">
                            {
                            SmartCameras.map( (item, index) => (
                            <MobilesCard key={index} product={item} addToCart={addToCart}/>
                            ))
                            }
                </div>
          </TabPanel>

          <TabPanel value={value} index={4} className="tabPanel">
          <div className="itemsWrapper">
                            {
                            Playstations.map( (item, index) => (
                            <MobilesCard key={index} product={item} addToCart={addToCart}/>
                            ))
                            }
                </div>
          </TabPanel>

          <TabPanel value={value} index={5} className="tabPanel">
          <div className="itemsWrapper">
                            {
                            Televisions.map( (item, index) => (
                            <MobilesCard key={index} product={item} addToCart={addToCart}/>
                            ))
                            }
                </div>
          </TabPanel>

          <TabPanel value={value} index={6} className="tabPanel">
          <div className="itemsWrapper">
                            {
                            FlashDealsData.map( (item, index) => (
                            <MobilesCard key={index} product={item}  addToCart={addToCart}/>
                            ))
                            }
                </div>
          </TabPanel>

        </Box>
            </div>
        </div>
      );
    };

