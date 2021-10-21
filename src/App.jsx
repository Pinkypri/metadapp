import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import "./style.css";
import { Typography } from "@material-ui/core";
import Switch from "@mui/material/Switch";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Switch demo" } };

const App= () => {
  const [net, setNet] = React.useState("");
  const [sendTo, setSendTo] = React.useState("");
  const [isEmailChecked, setIsEmailChecked] = React.useState(false);
  const [isTelegramChecked, setIsTelegramChecked] = React.useState(false);
  const [isEmailOpened, setIsEmailOpened] = React.useState(false);
  const [isTelegramOpened, setIsTelegramOpened] = React.useState(false);

  const [sendMsg, setSendMsg] = React.useState(false);
  const [input, setInput] = React.useState({
    botToken: "",
    chatId: "",
  });

  const handleChange = (event) => {
    setNet(event.target.value );
  };

  const handleSend = (event) => {
    setSendTo(event.target.value );
  };

  const handleEmail = (event) => {
    if (isEmailChecked === false) {
      setIsEmailOpened(true);
    }
    if (isEmailChecked === true) {
      setIsEmailOpened(false);
    }

    setIsEmailChecked(event.target.checked);
  };

  const handleTelegram = (event) => {
    if (isTelegramChecked === false) {
      setIsTelegramOpened(true);
    }
    if (isTelegramChecked === true) {
      setIsTelegramOpened(false);
    }
    setIsTelegramChecked(event.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  React.useEffect(() => {
    if (input.botToken.trim() !== "" && input.chatId.trim() !== "") {
      setSendMsg(true);
    } else {
      setSendMsg(false);
    }
  }, [input]);

  return (
    <>
    
        <Typography variant="h4" style={{ textAlign: "center" ,paddingTop:"20px"}}>
          <span className="logo--brand">👯</span> Track Token Purchases
        </Typography>
        <Typography
          className="desc--spacing"
          variant="body2"
          style={{ textAlign: "center" ,paddingLeft:"20px"}}
        >
          Filter by token, quantity and buyer address.
        </Typography>
   
      <Grid
        container
        xs={12}
        spacing={4}
        justifyContent="space-evenly"
        className="grid-container"
      >
        <Grid container xs={12} spacing={4} >
          <Grid item sm={6} md={5} xs={12} lg={5} xl={5}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select a Network
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={net}
                  label="Select a Network"
                  onChange={handleChange}
                  className="text-colour-white"
                >
                  <MenuItem value={"ethMainnet"}>ETH Mainnet</MenuItem>
                  <MenuItem value={"bscMainnet"}>BSC Mainnet</MenuItem>
                  <MenuItem value={"polygonMainnet"}>Polygon Mainnet</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item sm={6} md={5} xs={12}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select FROM or TO
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sendTo}
                  label="Select FROM or TO"
                  onChange={handleSend}
                  className="text-color-white"
                >
                  <MenuItem value={"from"}>FROM..</MenuItem>
                  <MenuItem value={"to"}>TO..</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          justifyContent="flex-start"
          className="grid-spacing"
        >
          <Grid item sm={6} md={5} xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="WALLET ADDRESS"
                variant="outlined"
                className="text-color-white"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={4} className="grid-container">
        <Grid container xs={12} justifyContent="space-between">
          <Typography variant="h5">Send an email</Typography>
          <Switch {...label} checked={isEmailChecked} onChange={handleEmail} />
        </Grid>
        {isEmailOpened ? (
          <Grid container xs={12} justifyContent="space-around">
            <Grid item sm={6} md={5} xs={12} lg={6} xl={6}>
              <TextField
                id="full-width"
                label="SEND TO"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Add email addresses separated by comma"
                fullWidth
                margin="normal"
                variant="standard"
                className="text-color-white"
                style={{ width: "90%" }}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <TextField
                id="full-width"
                label="SUBJECT"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Your Email subject"
                fullWidth
                margin="normal"
                variant="standard"
                className="text-color-white"
                style={{ width: "90%" }}
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
            </Grid>
            <Grid item sm={6} md={5} xs={12} lg={6} xl={6} spacing={4}>
              <Typography variant="h6">MESSAGE</Typography>
              <TextareaAutosize
                placeholder="Your email body....."
                maxRows={10}
                aria-label="maximum height"
                style={{ width: "100%", height: "100%" }}
                className="grid-font-black"
              />
            </Grid>
          </Grid>
        ) : null}
      </Grid>

      <Grid
        container
        xs={12}
        spacing={4}
        justifyContent="space-between"
        className="grid-container"
      >
        <Typography variant="h5">Send using Telegram</Typography>
        <Switch
          {...label}
          checked={isTelegramChecked}
          onChange={handleTelegram}
        />
        {isTelegramOpened ? (
          <Grid container xs={12} justifyContent="space-around">
            <Grid item sm={6} md={5} xs={12} lg={6} xl={6}>
              <TextField
                id="full-width"
                label="BOT TOKEN"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Enter your Telegram Bot ID"
                fullWidth
                margin="normal"
                variant="standard"
                className="text-color-white"
                style={{ width: "90%" }}
                value={input.botToken}
                onChange={handleInputChange}
                name="botToken"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <TextField
                id="full-width"
                label="CHAT ID"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Enter the Telegram Chat ID"
                fullWidth
                margin="normal"
                variant="standard"
                className="text-color-white"
                style={{ width: "90%" }}
                value={input.chatId}
                onChange={handleInputChange}
                name="chatId"
                InputProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <Grid
                item
                sm={6}
                md={5}
                xs={12}
                lg={6}
                xl={6}
                spacing={4}
                className="grid-radio-btn--spacing"
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">MESSAGE FORMAT</FormLabel>
                  <RadioGroup
                    aria-label="html"
                    defaultValue="HTML"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="HTML"
                      control={<Radio />}
                      label="Html"
                    />
                    <FormControlLabel
                      value="Markdown V2"
                      control={<Radio />}
                      label="Markdown V2"
                    />
                    <FormControlLabel
                      value="Markdown (Deprecated)"
                      control={<Radio />}
                      label="Markdown (Deprecated)"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Button
                variant="outlined"
                style={{ width: "100%" }}
                className={`${
                  sendMsg ? "btn--btn-enable" : "btn--btn-disable"
                }`}
              >
                Send a Text Message
              </Button>
            </Grid>

            <Grid item sm={6} md={5} xs={12} lg={6} xl={6} spacing={4}>
              <Typography variant="h6">MESSAGE</Typography>
              <TextareaAutosize
                placeholder="Your Telegram message body....."
                maxRows={10}
                aria-label="maximum height"
                style={{ width: "80%", height: "76%" }}
                className="textarea-black"
              />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
      <Grid
        container
        xs={12}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        className="grid-container"
      >
        <Grid item sm={6} md={5} xs={12} lg={6} xl={6} spacing={4}>
          <TextField
            id="full-width"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Name this trigger"
            fullWidth
            margin="normal"
            variant="standard"
            className="text-color-white"
            style={{ width: "90%" }}
            value={input.chatId}
            onChange={handleInputChange}
            name="chatId"
            InputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid
          item
          sm={6}
          md={5}
          xs={12}
          lg={6}
          xl={6}
          spacing={4}
          className="btn--btn-spacing"
        >
          <Button variant="outlined" color="secondary">
            Back
          </Button>
          <Button variant="outlined" color="secondary">
            Reset
          </Button>
          <Button variant="outlined" color="secondary">
            Preview
          </Button>
          <Button variant="contained" color="secondary">
            Create
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default App;

