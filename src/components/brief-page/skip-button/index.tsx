import React from 'react'

const SkipButton = React.forwardRef<HTMLDivElement, {}>(function SkipButton() {
    return (
      <div>
          <div><p>Пропустить</p><span></span></div>
          <p>Затрудняюсь ответить</p>
      </div>
    )
})
  
export default SkipButton;