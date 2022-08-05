const btnSelector = '.btn';

const categoriesBtns = categoriesBtnContainer.querySelectorAll(btnSelector);

const organizationBtns = organizationBtnContainer.querySelectorAll(btnSelector);

function filterSelection(category, tagName, assetsSelector = '.column') {
    const columns = document.querySelectorAll(assetsSelector);

    for (let column of columns) {
        column.dataset[`${tagName}Visible`] = false;

        if (isIn(category, separateTags(column, tagName))) {
            column.dataset[`${tagName}Visible`] = true;
        } else if (category == "all") {
            column.dataset[`${tagName}Visible`] = true;
        }
    }
}

function separateTags(element, dataName, separator = ',') {
    const dataTags = element.dataset[dataName];
    const tagsArray = dataTags.split(separator);

    return tagsArray
}

// Main

filterSelection("all", 'category')
filterSelection("all", 'organization')

// Add active class to the current button (highlight it)

function resetBtn(btn, categoryBtnContainer) {
    const prev = categoryBtnContainer.querySelector(".active");
    prev.classList.toggle("active");

    btn.classList.add("active");
}

for (let btn of categoriesBtns) {
    btn.addEventListener("click", function () {
        resetBtn(this, categoriesBtnContainer);
    });
}

for (let btn of organizationBtns) {
    btn.addEventListener("click", function () {
        resetBtn(this, organizationBtnContainer);
    });
}