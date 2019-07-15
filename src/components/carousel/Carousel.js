export default function CarouselJS (carouselArray) {
    let _length = carouselArray.length
    let _carouselWidth = carouselArray[0].width
    let _carouselHalfWidth = _carouselWidth / 2
    let _curCarouselIndex = 0

    let _setCarouselItemTransform = function(carouselItem, translateX, transition = '') {
        let translateXNum = parseFloat(translateX)
        carouselItem.setAttribute('style','transform: translateX(' + translateX + 'px);' + transition )
        carouselItem.translateX = translateXNum
    }

    let _init = function() {
        let tTranslateX = -(_carouselHalfWidth)
        for (let i = 0; i < _length; i++) {
            let tCarouselItem = carouselArray[i]
            _setCarouselItemTransform(tCarouselItem, tTranslateX)
            if (i === _length - 1){
                let tLastTranslateX = _carouselWidth + _carouselHalfWidth
                _setCarouselItemTransform(tCarouselItem, -tLastTranslateX)
            }
            tCarouselItem.index = i
            tTranslateX += _carouselWidth
        }
    }

    this.left = function() {
        let tPreCarouselItemIndex = _curCarouselIndex - 1 >= 0 ?_curCarouselIndex - 1 :_length - 1
        let tLastCarouselItemIndex = tPreCarouselItemIndex - 1 >= 0 ?tPreCarouselItemIndex - 1 :_length - 1
        for (let i = 0; i < _length; i++) {
            let tCarouselItem = carouselArray[i]
            if ( i === tLastCarouselItemIndex) {
                let tLeftTranslateX = -(_carouselWidth + _carouselHalfWidth)
                _setCarouselItemTransform(tCarouselItem, tLeftTranslateX)
                continue
            }
            let tNextTranslateX = tCarouselItem.translateX + _carouselWidth
            _setCarouselItemTransform(tCarouselItem, tNextTranslateX, 'transition: all ease-in 0.5s;')
        }
        _curCarouselIndex = tPreCarouselItemIndex
    }

    this.right = function() {
        let tPreCarouselItemIndex = _curCarouselIndex - 1 >= 0 ?_curCarouselIndex - 1 :_length - 1
        let tNextCarouselItemIndex = _curCarouselIndex + 1 > _length - 1 ?0 :_curCarouselIndex + 1 
        for (let i = 0; i < _length; i++) {
            let tCarouselItem = carouselArray[i]
            if (i === tPreCarouselItemIndex) {
                let tLastTranslateX = _carouselWidth * (_length - 2) - _carouselHalfWidth
                _setCarouselItemTransform(tCarouselItem, tLastTranslateX)
                continue
            }
            let tNextTranslateX = tCarouselItem.translateX - _carouselWidth
            _setCarouselItemTransform(tCarouselItem, tNextTranslateX, 'transition: all ease-in 0.5s;')
        }
        _curCarouselIndex = tNextCarouselItemIndex  
    }

    _init();
}
