import { Button, FormControlLabel, Switch, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import { requestApi } from './requestApi'
import styles from './Request.module.css'

const Request = () => {
  const [isChecked, setIsChecked] = useState(() => false)
  const [resultText, setResultText] = useState('')

  const changeCheckbox = async (isChecked: boolean) => {
    try {
      const response = await requestApi.post(isChecked)
      setResultText(`${response.data.errorText}; info: ${response.data.info}`)
    } catch (error) {
      setResultText(
        `errorText: ${error.response.data.errorText}; info: ${error.response.data.info}`
      )
    }
  }

  return (
    <div className={styles.request}>
      <Paper>
        <p>{resultText}</p>
        <Button
          onClick={() => changeCheckbox(isChecked)}
          variant={'contained'}
          color={'primary'}
        >
          SEND REQUEST
        </Button>
        <FormControlLabel
          control={
            <Switch
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              name='checkedA'
            />
          }
          label={isChecked ? 'ON' : 'OFF'}
        />
      </Paper>
    </div>
  )
}

export default Request
