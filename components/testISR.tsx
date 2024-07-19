// components/testISR.tsx
"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const TestIsr = () => {
  // const [products, setProducts] = useState<any[]>([]);
  // const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch('http://localhost:3000/api/GetFavouritesFly', {
//           next: { revalidate: 10 },
//         });

//         if (!res.ok) {
//           throw new Error('Failed to fetch products');
//         }

//         const data = await res.json();
//         setProducts(data.user2);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products. Please try again later.');
//       }
//     };

//     fetchProducts();
//   }, []);

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // console.log('products: ' + products)

  const [state, setState] = useState([])
  const router = useRouter();
  const queryClient = useQueryClient();

  const fetchFavouritesHotel = async () => {
    const res = await fetch('/api/GetFavouritesHotel');
    if (!res.ok) {
      throw new Error('Failed to fetch favourites hotel');
    }
    return res.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['favourites_hotel'],
    queryFn: fetchFavouritesHotel
  });

  const addFavourites = async () => {
    const res = await fetch('/api/AddHotelFavourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: '4d6ec45e-60f4-4fc5-b60e-ba91f8e18272',
        hotelId: 2
      })
    });

    if (!res.ok) {
      throw new Error('Failed to add to favourites');
    }

    return res.json();
  };


  
  const handleDeleteFavourites = async () => {
    const res = await fetch('/api/DeleteFavouritesItem', {
      method: 'DELETE', 
        headers: {
        'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          userId: '4d6ec45e-60f4-4fc5-b60e-ba91f8e18272',
          hotelId: 2
        }),
        cache: 'force-cache',
        next: {
          revalidate: 200
        }
    })
    if(res.ok) {
      console.log('Все хорошо')
    } 
    console.log('Все плохо')
  }

  const mutation = useMutation({
    mutationFn: addFavourites,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['favourites_hotel']});
    }
  });

  const mutationDelete = useMutation({
    mutationFn: handleDeleteFavourites,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['favourites_hotel']});
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    mutationDelete.mutate()
  } 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      hello
      <button type='submit' onClick={handleDelete}>DELETE</button>
      <button type='submit' onClick={handleSubmit}>BTN</button>
      {
        data.user2.map((item) => (
          <>{item.userId}</>
        ))
      }
      {
       data?.length > 0 ? res?.data?.map((item) => (
          <>{item.hotel.id}, {item.hotel.price},,,,,{item.userId},,,,{item.hotelId} </>
        )) : null
      }
    </ul>
  );
};

export default TestIsr;
