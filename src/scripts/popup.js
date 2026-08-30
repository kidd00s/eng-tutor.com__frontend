const describeTrigger = document.querySelector(".describe-info")
const hiddenBox = document.querySelector(".describe-hidden")
const hiddenCross = document.querySelector(".describe-hidden__close")
const hiddenShadow = document.querySelector(".describe-shadow")
const body = document.querySelector(".body")



function describePopup() {
try {
    if(!describeTrigger || !hiddenBox) return "Error 1-4 string"

    describeTrigger.addEventListener("click", () => {
    hiddenBox.classList.add("active")
    body.classList.add("active")
    })

    hiddenCross.addEventListener("click", () => {
        hiddenBox.classList.remove("active")
        body.classList.remove("active")
    })

    hiddenShadow.addEventListener("click", () => {
        hiddenBox.classList.remove("active")
        body.classList.remove("active")
    })


    
} catch (error) {
    return error.message
}
}

export {describePopup}