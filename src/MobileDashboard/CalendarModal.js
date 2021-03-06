import React from "react";
import Calendar from "./Calendar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "100",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function CalendarModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CalendarTodayIcon onClick={handleOpen}>Open modal</CalendarTodayIcon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Calendar />
        </Box>
      </Modal>
    </div>
  );
}
