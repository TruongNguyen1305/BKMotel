import { useState } from "react";

import HeaderOnlyLogo from "../../layouts/components/Header/HeaderOnlyLogo";
import Footer from "../../layouts/components/Footer";
import styles from './style.module.css'

import { createTheme, ThemeProvider  } from '@mui/material/styles';
import {FormControlLabel, Checkbox, Link, Divider, TextField, Button} from '@mui/material'

const theme = createTheme({
    components: {
        // Name of the component
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 600,
                        height: '42px',
                        color: "white"
                    },
                }
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        width: '480px',
                        marginBottom: '30px'
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        marginBottom: '20px',
                        fontSize: '30px',
                    }
                }
            },

            MuiFormControlLabel: {
                styleOverrides: {
                    label: {
                        fontSize: '16px',
                        fontFamily: "'Josefin Sans', sans-serif",
                    }
                }
            },
            MuiInputLabel: {
                defaultProps: {
                  sx: {
                    fontSize: "16px",
                    fontFamily: "'Josefin Sans', sans-serif",

                  },
                },
              },
              MuiOutlinedInput: {
                defaultProps: {
                  sx: {
                    fontSize: "16px",
                    fontFamily: "'Josefin Sans', sans-serif",

                  }
                }
              }
            },

    palette: {
      bkmotel: {
        main: '#00A699',
      },
    },
  });

const theme1 = createTheme({
components: {
    // Name of the component
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    fontSize: '15px',
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    height: '50px',
                    width: '400px',
                    color: '#1488DB',
                },
            }
        },
},
});

function LoginPage({children}) {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    console.log(values)
    return ( 
        <>
            <HeaderOnlyLogo />
        
            <div className={styles.inner}>
            <p style = {{fontSize:16, color:'black', marginBottom:15}}>Chào mừng bạn đến với  
                <span style = {{fontSize:16, color:'#1488DB', fontWeight:500}}> BK</span>
                <span style = {{fontSize:16, color:'#00A699'}}>Motel</span>
            .</p>

            <p style = {{fontSize:20, fontWeight: 500, marginBottom: 15}}>Đăng nhập để tiếp tục</p>
            
            <Divider variant="middle" theme = {theme}/>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <ThemeProvider theme={theme}>
                    <TextField 
                        name = "email"
                        label="Nhập Email / Tên đăng nhập" 
                        fullWidth 
                        color='bkmotel' 
                        onChange = { e => {
                            setValues({...values, [e.target.name]: e.target.value})
                        }}    
                    />
                    
                    <TextField 
                        name = "password"
                        label="Nhập mật khẩu" 
                        type="password" 
                        variant="outlined" 
                        fullWidth 
                        color='bkmotel' 
                        onChange = { e => {
                            setValues({...values, [e.target.name]: e.target.value})
                        }}    
                    />
                
                
                <div className = {styles.loginActionContainer}>
                    <div className = {styles.loginAction}>
                        <Link href="/resetpassword" underline="none" color='#00A699'> Quên mật khẩu ?</Link>
                        
                        <FormControlLabel 
                            control={<Checkbox defaultChecked color='bkmotel' sx={{ '& .MuiSvgIcon-root': { fontSize: 22 }}}/> } 
                            label= 'Nhớ tài khoản'
                        />
                    </div>

                    <Button variant="contained" size='large' color='bkmotel'>ĐĂNG NHẬP</Button>
                </div>
                <Divider variant="middle" theme = {theme}/>

                <p style = {{fontSize:20, fontWeight: 500, marginBottom: 20, marginTop: 30}}>Bạn chưa có tài khoản </p>
                </ThemeProvider>

                <Button href="/signup" theme={theme1} className = {styles.logInBTN} variant="outlined"  size='large' >ĐĂNG KÝ TÀI KHOẢN</Button>
            
            </form>
        </div>

        
        <Footer />
        
        </>


       

    );
}

export default LoginPage;