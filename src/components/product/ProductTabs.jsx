import styles from "./ProductTabs.module.scss";
import User from "../user/User";
import { Tab, TableBody, Table, TableRow, TableCell } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { parseISO, formatDistance } from "date-fns";

import { useState } from "react";

export default function ProductTabs({ text, bids = [] }) {
  const [value, setValue] = useState("1");
  const handleTabChange = (event, newValue) => setValue(newValue);

  return (
    <div className={styles["product-tabs"]}>
      <TabContext value={value}>
        <TabList
          value={value}
          onChange={handleTabChange}
          area-label={"product tabs"}
        >
          <Tab label={"Details"} value="1" className={styles["tab-details"]} />
          <Tab label={"Bids"} value="2" className={styles["tab-bids"]} />
        </TabList>
        <TabPanel value="1" className={styles["text-details"]}>
          {text}
        </TabPanel>
        <TabPanel value="2" className={styles["bids-view"]}>
          <Table area-label={"product details table"}>
            <TableBody>
              {bids.map((bid, i) => (
                <TableRow
                  className={`table-row-${i} ${styles["table-row"]}`}
                  key={i}
                >
                  <TableCell sx={{ borderBottom: "none" }}>
                    <User {...bid.user} size={34} />
                  </TableCell>
                  <TableCell className={styles["bid-cell"]}>
                    {bid.amount}
                  </TableCell>
                  <TableCell className={styles.cell}>
                    {formatDistance(parseISO(bid.date), Date.now())}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
