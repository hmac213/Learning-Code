import java.util.Stack;
import java.util.Queue;
import java.util.LinkedList; // required for queues

public class Intro {
    public static void main(String[] args) {
        // Stacks
        
        Stack<String> stack = new Stack<>();

        // Stacks are a FILO (First in Last Out) data structure. They only allow for operations on the last item within them.
        // Methods:
        //          Add -> push()
        //          Remove -> pop()
        //          Look -> peek()
        // Note: all operations are only to the topmost element

        stack.push("hello");
        stack.push("how");
        stack.push("are");
        stack.push("you");

        String lastElement = stack.peek();

        System.out.println(stack);
        System.out.println("The last element is " + lastElement);

        String removedElement = stack.pop();

        System.out.println("You just removed " + removedElement);
        System.out.println(stack);

        // Queues

        Queue<String> queue = new LinkedList<String>();

        // Queues are not objects, they are interfaces. Thus, they cannot be instantiated. It must either be declared as a LinkedList or PriorityQueue.

        // Queues are a FIFO (First in First Out) data structure -- like a line at an amusement park.
        // Designed for holding elements prior to processing them
        // Methods:
        //          Enqueue (add to tail) -> offer()
        //          Dequeue (remove from head) -> poll()
        //          Examine (head) -> peek()

        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");
        queue.offer("Fourth");

        System.out.println(queue);

        String firstPerson = queue.peek();

        System.out.println("The first person in line is " + firstPerson);

        String leaveLine = queue.poll();

        System.out.println("Getting to leave the line is " + leaveLine);
        System.out.println("The new line order is " + queue);

        // Useful things that queues inherit from the Collections class
        // System.out.println(queue.isEmpty());
        // System.out.println(queue.size());
        // System.out.println(queue.contains("Fourth"));

    }
}