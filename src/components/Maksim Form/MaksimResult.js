import React, { useState } from 'react'
import { ListItem, Paper, List, ListItemText, Table, TableBody, ListItemIcon, TableCell, TableContainer, TableHead, TableRow, Typography,  } from '@material-ui/core'
import { InsertDriveFile } from '@material-ui/icons';
import { useData } from './DataContext';
import MainContainer from './MainContainer';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from './PrimaryButton';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Confetti from 'react-confetti'

function MaksimResult() {
    const {data} = useData()

    const entries = Object.entries(data).filter(entry => entry[0] != "files")
    const { files } = data;
    const [success, setSuccess] = useState(false)
    const history = useHistory()
    // const classes = useStyles();
    const onSubmit = () => {
        history.push("/")
     

    }


    // const onSubmit = async () => {
    //     const formData = new FormData()
    //     if(data.files){
    //         data.files.forEach(file => {
    //             formData.append("files", file, file.name)
    //         })
    //     }

    //     entries.forEach(entry => {
    //         formData.append(entry[0], entry[1])
    //     })

    //     const res = await fetch("http://localhost:4000/", {
    //         method: "POST",
    //         body: formData,
    //     })

    //     if(res.status = 200) {
    //         Swal.fire("Great Job!", "You've completed the Task", "success");
    //         setSuccess(true)
    //     }
    //     if (success){
    //         return <Confetti/>
    //     }
    
    // }
    return (
       <MainContainer>
           <Typography component="h2" variant="h5">
               Form Values
           </Typography>
           <TableContainer component={Paper}>
             <Table>
                 <TableHead>
                     <TableRow>
                         <TableCell>
                             Field
                         </TableCell>
                         <TableCell align="right">
                             Value
                         </TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     {entries.map(( entry ) => (
                         <TableRow key={entry[0]}>
                             <TableCell>{entry[0]}</TableCell>
                             <TableCell>{entry[1].toString()}</TableCell>
                         </TableRow>
                     ))}
                 </TableBody>
             </Table>
           </TableContainer>
           {files && (
               <>
                <Typography component="h2" variant="h5">
                    Files
                </Typography>
                <List>
                    {files.map((f, index) => (
                        <ListItem key={index}>
                        <ListItemIcon>
                            <InsertDriveFile />
                        </ListItemIcon>
                        <ListItemText 
                        primary={f.name} 
                        secondary={f.size}
                        />
                        </ListItem>
                       
                    ))}
                </List>
               </>
           )}
           <PrimaryButton onClick={onSubmit}>Finish</PrimaryButton>
             <Link to="/">Start Over</Link>
       </MainContainer>
    )
}

export default MaksimResult
