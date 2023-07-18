import { ListItemText, ListItem, styled, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const List = styled(ListItem)`
    display: flex;
    marginTop: 10px;
    border: 5px solid #FFFDD0;
`;

const Transaction = ({transaction, deleteTransaction}) => {
    
    const sign = transaction.amount >= 0 ? '₹' : '-₹';
    const amount = sign + Math.abs(transaction.amount);
    const color = transaction.amount >=0 ? '#bfff00' : '#DE3163';
     

    return (
        <List style={{background: `${color}`, color: 'black'}}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={amount} />
        </List>
    )
}

export default Transaction;