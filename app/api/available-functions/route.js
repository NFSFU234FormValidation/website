export async function GET(request) {
    try {
      // Make the fetch call and await the response
    //   const response = await fetch('http://localhost/available-functions.json');
      const response = await fetch(`http://localhost/available-functions.json?_=${new Date().getTime()}`);
  
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON data from the response
      const data = await response.json();
  
      // Return the JSON data in the Next.js response
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store', // No caching
        },
      });
  
    } catch (error) {
      // Handle errors and return a 500 response
      return new Response(JSON.stringify({ error: 'Content not found' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store', // No caching
        },
      });
    }
  }
  