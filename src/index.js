// master : user
export const getUserRole = () => {
    localStorage.getItem("userRole")
}

export const setUserRole = () => {
    let userRole;
    localStorage.setItem("userRole", userRole)
}

// logged in : not logged in

