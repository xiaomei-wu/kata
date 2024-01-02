/* 
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.
Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example
If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.
Person  had to bribe  people to get to the current position. Print Too chaotic.

Function Description

Complete the function minimumBribes in the editor below.

minimumBribes has the following parameter(s):

int q[n]: the positions of the people after all bribes
Returns

No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
Input Format

The first line contains an integer , the number of test cases.

Each of the next  pairs of lines are as follows:
- The first line contains an integer , the number of people in the queue
- The second line has  space-separated integers describing the final state of the queue.
*/

function minimumBribes(q: number[]): void {
  let bribes = 0;
 
   for (let i = q.length - 1; i >= 0; i--) {
     const originalPosition = q[i] - 1; // Convert to 0-based index
     const bribesMade = originalPosition - i;
 
     if (bribesMade > 2) {
       console.log("Too chaotic");
       return;
     }
 
     // Count the number of bribes for this person
     for (let j = Math.max(0, originalPosition - 1); j < i; j++) {
       if (q[j] > q[i]) {
         bribes++;
       }
     }
   }
 
   console.log(bribes);
 }

const testCases = [
  [5, [2, 1, 5, 3, 4]],
  [5, [2, 5, 1, 3, 4]],
];

for (const testCase of testCases) {
  const [n, queue] = testCase;
  //@ts-ignore
  minimumBribes(queue);
}
