document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        interval: 3000,
        indicators: false
    });
    var elems2 = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems2);
    var mb = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(mb);
});
var btn_pintar = document.getElementById('btn_pintar');
var kervis_pintar = document.getElementById('kervis-pintar');
if (btn_pintar) {
    btn_pintar.addEventListener('click', kervis);

    function kervis() {
        kervis_pintar.style.display = 'block';
    }
}

const masonryLayout = (containerElem, itemsElems, columns) => {
    containerElem.classList.add('masonry-layout', `columns-${columns}`);
    let columnsElements = []
    for (let i = 1; i<= columns; i++){
        let columns = document.createElement('div')
        columns.classList.add('masonry-columns',`columns-${i}`)
        containerElem.appendChild(columns)
        columnsElements.push(columns)
    }

    for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++)
    {
        for (let n = 0 ; n < columns ; n++)
        {   let item = itemsElems[m * columns + n]
            columnsElements[n].appendChild(item)
            item.classList.add('masonry-item')
        }
    }
}

masonryLayout(document.getElementById('gallery'),document.querySelectorAll('.gallery-item') ,3)
