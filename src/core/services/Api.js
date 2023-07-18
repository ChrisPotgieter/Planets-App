import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const localUrl = 'https://api.api-ninjas.com/v1/planets?name=';

export async function Api(name) {
	//For get Request

   /* axios({
        method: 'get',
        url: localUrl + name,
        headers: {'X-Api-Key': 'ogSgWjPrIy4Sxewt7hQKag==Q65swHEfbe7DfppT' },
        responseType: 'application/json'
      })
      
        .then(function (response) {
            console.log(response)
         return response;
        });*/
        const result = await axios({
          method: 'get',
          url: localUrl + name,
          headers: {'X-Api-Key': 'ogSgWjPrIy4Sxewt7hQKag==Q65swHEfbe7DfppT' },
          responseType: 'application/json'
        })
           console.log(result.data);
           console.log(JSON.parse(result.data))


      return JSON.parse(result.data);
   


}
