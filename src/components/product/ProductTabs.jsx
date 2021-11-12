import styles from './ProductTabs.module.scss'
import User from "../user/User"
import { Tab, TableBody, Table, TableRow, TableCell } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import parseISO from "date-fns/parseISO"
import formatDistance from 'date-fns/formatDistance'

import { useState } from 'react'

export default function ProductTabs({ text, bids }){
    const [value, setValue] = useState("1")
    const handleTabChange = (event, newValue) => setValue(newValue); 

    return (
        <div className={styles["product-tabs"]}>
            <TabContext value={value}>
                <TabList value={value} onChange={handleTabChange} area-label={"product tabs"}>
                    <Tab label={"Details"} value="1" className={styles["tab-details"]}/>
                    <Tab label={"Bids"}  value="2" className={styles["tab-bids"]}/>
                </TabList>
                <TabPanel value="1">
                    <Table area-label={"product details table"}>
                        <TableBody>
                            {/* There should be .map() */}
                            <TableRow className={`table-row-${0}`}>
                                <TableCell>
                                    <User />
                                </TableCell>
                                <TableCell>price and currency</TableCell>
                                <TableCell>when</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TabPanel>
                <TabPanel value="2"></TabPanel>
            </TabContext>
        </div>
    )
}
