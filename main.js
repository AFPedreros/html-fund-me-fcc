const connectBtn = document.getElementById("connect-btn")

const connect = () => {
    if (typeof window.ethereum !== "undefined") {
        console.log("I see Metamask")
        window.ethereum.request({ method: "eth_requestAccounts" })
    } else {
        console.log("No Metamask")
    }
}

connectBtn.addEventListener("click", connect)
