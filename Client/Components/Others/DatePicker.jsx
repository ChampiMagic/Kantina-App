import React, { useState, useEffect } from "react";
import { View, Text, Platform, TouchableOpacity} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({defaultDate, setFieldValue}) => {


    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const showDatepicker = () => {
        if (Platform.OS === 'android') {
            setShow(true);
            // for iOS, add a button that closes the picker
          }
      };

      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        
        setShow(false);
        setDate(new Date(currentDate));
        setFieldValue('date', currentDate);
      };

  useEffect(() => {

    if(defaultDate) {

      setDate(new Date(defaultDate))
      
    }

  }, [defaultDate])


    return (
        <View>
            <TouchableOpacity onPress={showDatepicker} style={{ borderBottomColor: '#222', borderBottomWidth: 1, paddingBottom: 10}}>
                 <Text style={{ fontSize: 17 }}>{`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`}</Text>
            </TouchableOpacity>
    
            {show && 
            (
              <DateTimePicker
                testID="dateTimePicker"
                display="default"
                value={date}
                mode='date'
                is24Hour={true}
                onChange={onChange}
              />
            )}
        </View>
       
    )
}

export default DatePicker;